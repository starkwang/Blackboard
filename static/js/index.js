  var socket = io.connect('http://localhost:8080');
  socket.on('update', function(data) {
      document.getElementById('input').value = data;
      render();
  });

  function render() {
      var value = document.getElementById('input').value;
      document.getElementById('code').innerHTML = '<pre class="brush: js;">' + value + '</pre>';
      SyntaxHighlighter.highlight();
  }

  function input() {
      render();
      var value = document.getElementById('input').value;
      socket.emit('input', value);
  }
  SyntaxHighlighter.all();
