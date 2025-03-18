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
  
      // Remplacer console.log pour l'afficher dans l'output
      console.log = function (...args) {
        document.getElementById('output').textContent += args.join(' ') + '\n';
        originalLog.apply(console, args); // Appeler le log d'origine pour que ça apparaisse aussi dans la console
      };
  
      // Remplacer console.error pour l'afficher dans l'output
      console.error = function (...args) {
        document.getElementById('output').textContent += 'Erreur: ' + args.join(' ') + '\n';
        originalError.apply(console, args); // Appeler l'erreur d'origine pour que ça apparaisse aussi dans la console
      };
    }
  
    // Ajouter l'événement pour le bouton "Exécuter le code"
    document.getElementById('runButton').addEventListener('click', () => {
      const code = editor.getValue();
      
      // Vider la section output avant d'exécuter le code
      document.getElementById('output').textContent = '';
  
      try {
        // Intercepter console.log
        captureConsoleOutput();
  
        // Exécuter le code JavaScript dans un environnement sécurisé
        eval(code);
      } catch (error) {
        // En cas d'erreur, afficher l'erreur dans la section de sortie
        document.getElementById('output').textContent = 'Erreur : ' + error.message;
      }
    });
  });
  