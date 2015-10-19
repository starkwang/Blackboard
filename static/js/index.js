var socket = io.connect('http://10.73.73.73:8193');
socket.on('update', function(data) {
    document.getElementById('input').value = data;
    render(translate(data));
});

function translate(value){
    return value.replace(/</ig, '&lt;').replace(/>/ig, '&gt;').replace(/"/ig, '&quot;');
}

function render(value) {
    document.getElementById('code').innerHTML = '<pre class="brush: js;">' + value + '</pre>';
    SyntaxHighlighter.highlight();
}

function input() {
    var value = document.getElementById('input').value;
    render(translate(value));

    socket.emit('input', document.getElementById('input').value);
}
SyntaxHighlighter.all();
tabIndent.renderAll();
