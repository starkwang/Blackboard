var socket = io.connect('http://192.168.1.100:8080');
socket.on('update', function(data) {
    document.getElementById('input').value = data;
    render();
});

function render(value) {
    document.getElementById('code').innerHTML = '<pre class="brush: xml;">' + value + '</pre>';
    SyntaxHighlighter.highlight();
}

function input() {
    var value = document.getElementById('input').value;
    value = value.replace(/</ig, '&lt;').replace(/>/ig, '&gt;').replace(/"/ig, '&quot;');
    render(value);

    socket.emit('input', value);
}
SyntaxHighlighter.all();
tabIndent.renderAll();
