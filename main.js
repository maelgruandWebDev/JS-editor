require.config({
  paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs' }
});

require(['vs/editor/editor.main'], function () {
  const editor = monaco.editor.create(document.getElementById('container'), {
      language: 'javascript',
      theme: 'vs-dark'
  });

  // Charger le script sauvegardé si disponible
  if (localStorage.getItem('savedScript')) {
      editor.setValue(localStorage.getItem('savedScript'));
  }

  function captureConsoleOutput() {
      const originalLog = console.log;
      const originalError = console.error;

      console.log = function (...args) {
          document.getElementById('output').textContent += args.join(' ') + '\n';
          originalLog.apply(console, args);
      };

      console.error = function (...args) {
          document.getElementById('output').textContent += 'Erreur: ' + args.join(' ') + '\n';
          originalError.apply(console, args);
      };
  }

  document.getElementById('runButton').addEventListener('click', () => {
      const code = editor.getValue();
      document.getElementById('output').textContent = '';

      try {
          captureConsoleOutput();
          eval(code);
      } catch (error) {
          document.getElementById('output').textContent = 'Erreur : ' + error.message;
      }
  });

  // Sauvegarde dans localStorage
  document.getElementById('saveButton').addEventListener('click', () => {
      const script = editor.getValue();
      localStorage.setItem('savedScript', script);

      // Sauvegarde en fichier
      const blob = new Blob([script], { type: "text/javascript" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "script.js";
      a.click();
  });

  // Charger un fichier depuis le PC
  document.getElementById('loadFileInput').addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (e) {
          editor.setValue(e.target.result);
      };
      reader.readAsText(file);
  });

  // Effacer la sauvegarde locale
  document.getElementById('clearButton').addEventListener('click', () => {
      localStorage.removeItem('savedScript');
      editor.setValue('');
  });
});
