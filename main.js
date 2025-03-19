document.addEventListener('DOMContentLoaded', function() {
  // Charger Monaco Editor
  require.config({
    paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs' }
  });

  require(['vs/editor/editor.main'], function () {
    const editor = monaco.editor.create(document.getElementById('container'), {
      language: 'javascript'
    });

    // Créer une fonction pour rediriger console.log vers la section output
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

    // Ajouter l'événement pour le bouton "Exécuter le code"
    const runButton = document.getElementById('runButton');
    if (runButton) {
      runButton.addEventListener('click', () => {
        const code = editor.getValue();
        
        // Vider la section output avant d'exécuter le code
        document.getElementById('output').textContent = '';

        try {
          captureConsoleOutput();
          eval(code);
        } catch (error) {
          document.getElementById('output').textContent = 'Erreur : ' + error.message;
        }
      });
    }
  });
});
