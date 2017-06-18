## Development site for the NTNU IGEM 2017 wiki

### GitHub use
1. If you do not have an account, create a GitHub account.
2. Go to this page, and select the **Create new file** option. A new window with a text editor and the alert below will show up.
 > You’re creating a file in a project you don’t have write access to. Submitting a change will create the file in a new branch in your fork J-Jahr/Joachim-J.github.io, so you can send a pull request.
 
You have now created a copy of the project at your own workspace, any changes you do will not affect the live web page
3. Go to your own version of the repository, it can be found trough your profile, or by going to https://github.com/__Your_username__/Joachim-J.github.io  

4. Download the GitHub repository to you computer by using the **Clone or Download** option at the top right of the main page. Simply chose **Download as ZIP**.
5. Open and edit your files as explained below
6. Go to your GitHub repository and select **Upload files**. Drag all your files into your browser (It is important that you drag the top level files and folders into the browser (That would be whichever folder this file lies in), to not create duplicates of all the files.)
7. Press **Commit changes** and wait for upload.
8. You will be directed to your repository. Here select **New pull request**. At the base fork (left side) select */Joachim-J/Joachim-J.github.io/*, and at the head fork (right side) select */__Your_username__/Joachim-J.github.io/*.
You can review your changes in the panel below if you wish to do so. 
9. Press **Create pull request** and add a comment about what you did. Try to keep it short, but descriptive, in case you wish to trace back the changes you did with this commit at a later stage. 


### Editing the website
1. Check to see if you have the latest version of the files at your computer, on **your** GitHub page, check if your repository is [behind master](IGEM/PNG/GitHub.png). Behind master means that the web page has been updated, and your version has not. 
Ahead means that you have added changes which has not yet been added to the web page. If the page has not yet accepted your commit, be sure you have created a **pull request**, as described above.
1. After downloading the files from GitHub, locate the html file you wish to edit. Initially the repository will only contain the almost empty *index.html* file, and the *Home.html* and *basis.html* files, located under *IGEM/HOME/*.
2. Open the html file in your browser to inspect it, refreshing the webpage will be how you "compile" the html document as you work with it. 
2. Open the html file with your editor of choice. A recommended simple editor is [Notepad++](https://notepad-plus-plus.org/download/v7.3.3.html), unless you wish to invest time into learning a more sophisticated editor.
3. The *basis.html* file is best left untouched, to keep a constant point of reference for the basis of the texts as the projects goes on
3. Edit the page. Only content below the ```<div class="content">``` should be edited.
Inside the ```<div class="content">``` there are multiple other ```<div>``` containers. 
    * The containers with the word *break* are the black lines crossing the page. These can be copied to any location between paragraphs.
    * The containers with the word paragraph are where you can write paragraphs. They may contain images, as described in their class name.
    * The image container places a line-breaking image in the text.It contains the code ```style="width: 50%;margin-top: 5em"``` where width is the width of the page the picture should occupy, and might need to be changed depending on the picture.
    The ```margin-top``` is how much whitespace is added above the picture, if whitespace is needed below the picture, change it to ```margin-bottom```.
    * The footer container is the end of the content field, and the bottom of the page.
5. Finish your code, if new files are needed (like a Team.html page), create a copy the Home.html file, 
and change the content as you wish. 
5. Upload the new files to GitHub. Be vary not to write on the same subject as another person, 
you will not see their edits until their code is commited to GitHub AND you download the new version.

### HTML 101
Html uses tags to describe the content of the page. The opening tags ```<x>``` (where x may be different letters or words, all with different functions), 
indicates the start of a "Field" with special functions. This field usually lasts until the tag is closed ```</x>```, with a dash. Simply write within the desired 
fields. Examples of all tags can be found in *basis.html*.   

The relevant tags are: 
 * ```<hN>``` The headline, where N is a number between 1 and 6. This is the headline with the lowest number being the
 largest text. 
 * ```<img src="">```  Adds an image to the location. The image location is given relative to 
 the html page. folders are entered with ```/```, and going "back" on folder is done by typing ```../```. This does not need a closing tag.
 * ```<p>``` A paragraph of text. 
 * ```<br>``` The newline (Enter) character in html. This does not need a closing tag.
 * Most other relevant functions are described [here](https://www.w3schools.com/html/html_formatting.asp)

### Support
If you have any questions, want some design changed on some pages, or discover any bugs, please do contact me 
on JoachimJahr@hotmail.com, or on [facebook](https://www.facebook.com/joachim.jahr.5).
