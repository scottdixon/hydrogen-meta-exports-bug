# Meta exports bug

> Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.

https://screenshot.click/04-00-kuxsv-3vual.gif

To reproduce:

1. Run `npm run dev`
2. Go to http://localhost:3000
3. Click the Sneakers link
4. Click the Home link

Repeat steps 3 and 4 until you see the error. You'll only see the error once. Restart the server and follow the same steps to see the error again.
