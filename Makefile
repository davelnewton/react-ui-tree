all:
	babel lib --out-dir dist
	lessc lib/react-ui-tree.less > dist/react-ui-tree.css
	webpack -p
less:
	lessc lib/react-ui-tree.less > dist/react-ui-tree.css
clean:
	rm dist/*
	rm example/bundle*
