# Secrete Message App
## About the app
This is an app used to encode messages.
## How it works
Input a text of at least 50 characters in the input field then press the encode button. The following occure before before displaying the final encoded message :
* First the input is normalized: the spaces and punctuations are removed from the text and the message is downcased.
* Then the normalized characters are broken into rows. These rows are regarded as forming a rectangle when printed with intervening newlines.
* The plaintext is organised into a rectangle. The size of the rectangle (r x c) is decided by the length of the message, such that c >= r and c - r <= 1, where c is the number of columns and r is the number of rows.
* The coded message is obtained by reading down the columns going left to right.
* The encoded message is output in chunks that fills a perfect rectangle (c X r) with c chunks of r length seperated by spaces.
* To get the original message we just need to read down the columns from left to right.
## Built with
Scale-Balance was built with :
* HTML
* CSS
* JavaScript