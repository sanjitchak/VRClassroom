
<!DOCTYPE html>
<title>Live Updates from Text Input in JavaScript</title>
<script src=comment.js></script><script>onload=commentsOnload</script>
<link rel=stylesheet href=blog.css>
<link rel="feed alternate" type=application/atom+xml href=feed.atom>

<header id=siteHeader>
<h1><a href=/~inimino/blog/>~inimino/blog</a></h1>
</header>
<section id=post>

<h1>Live Updates from Text Input in JavaScript</h1>

<p><time datetime=20090226>February 26, 2009</time></p>


<!-- This should be in the head, but a limitation in the blog engine, which I don't care enough to fix today, prevents it. -->
<style>
input {border:1px solid black;padding:0.2em}
</style>


<p>It is quite common to update a Web page immediately and continuously in response to user input in a text box (i.e. an &lt;input type=text> or a &lt;textarea>).
Common motivations would be to provide auto-completion or suggestion features, to validate the content of an HTML form, or to implement a live preview feature like the one used for comments on this very blog.
</p>

<p>This is quite simple to do, but as it seems to be somewhat of a frequently asked question I decided to publish an answer.
</p>


<h2>Demo</h2>

<p>Type in the text box to try it:
</p>

<fieldset>
<input type=text></input>
</fieldset>


<p id=charCount></p>
<p id=original></p>
<p id=reversed></p>



<h2>Code</h2>

<script class=visible>
/* A convenience function to reverse a string, and 
 * one to set the content of an element.
 */
 
function reverse(s){return s.split('').reverse().join('')}
 
function set(el,text){
 while(el.firstChild)el.removeChild(el.firstChild);
 el.appendChild(document.createTextNode(text))}
 
/* setupUpdater will be called once, on page load.
 */
 
function setupUpdater(){
 var input=document.getElementsByTagName('input')[0]
   , reversed=document.getElementById('reversed')
   , count=document.getElementById('charCount')
   , orig=document.getElementById('original')
   , oldText=input.value
   , timeout=null;
 
/* handleChange is called 50ms after the user stops 
   typing. */
 function handleChange(){
  var newText=input.value;
  if (newText==oldText) return; else oldText=newText;
  set(reversed, reverse(newText));
  set(count, 'You entered '+newText.length+' characters.');
  set(orig, newText);
 }
 
/* eventHandler is called on keyboard and mouse events.
   If there is a pending timeout, it cancels it.
   It sets a timeout to call handleChange in 50ms. */
 function eventHandler(){
  if(timeout) clearTimeout(timeout);
  timeout=setTimeout(handleChange, 50);
 }
 
 input.onkeydown=input.onkeyup=input.onclick=eventHandler;
}
 
setupUpdater();
document.getElementsByTagName('input')[0].focus();
</script>



<h2>Explanation</h2>

<p>On keyboard or mouse events that might change the contents of the text box, we set a timeout.
We don't want to have several timeouts running at the same time, so if there is one already running we cancel it.
We set a timeout rather than just reading the value directly, since this would be inefficient, and doesn't work for events which fire before the value property in the DOM is updated.
</p>

<p>When the timeout fires, we get the current value of the text box, do whatever we need to with it, and update the page.</p>
</section>

<ol id=replies>
<li id="c_Jdan_1235671981">
<heading><time datetime=2009-02-26T11:13:01-0700>2009-02-26</time> Jdan
</heading>
<section class=body>
<p>Fun :)</p></section>
<li id="c_Sam_1236302969">
<heading><time datetime=2009-03-05T18:29:29-0700>2009-03-05</time> Sam
</heading>
<section class=body>
<p>Works great. Operational limit: 524,287 characters ... any idea why it dies at 2^19? I guess it's probably 'count's data type.

<p>Pretty Cool stuff! I especially like the comments :)</p></section>
<ol>
<li id="c_inimino_1236309608">
<heading><time datetime=2009-03-05T20:20:08-0700>2009-03-05</time> inimino
</heading>
<section class=body>
<p>Sam, I think the length limit is imposed by the browser as a limit on the length of a single &lt;input type=text&gt;.  Had I used a &lt;textarea&gt; instead, this limit would probably be higher, and I'm sure this varies between browsers.

<p>In a recent Firefox build I got up to "You entered 2097152 characters." before stopping testing.  (Hold down Ctrl and hit A C V V to double the length of the text.)</p></section>
</ol>
</ol>

