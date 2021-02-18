const shell = require("shelljs");
shell.rm("-rf", "www");
shell.mkdir("-p", "www");
shell.echo(`<script>location.href="${process.argv.slice(-1)}"</script>`).to("www/index.html");
