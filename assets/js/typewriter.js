
var stringList   = ['making games', 
                    'playing games', 
                    'making games we love to play'];
var stringIndex  = 0;
var charIndex    = 0;
var writeSpeed   = 50;
var readDuration = 1000;
var eraseSpeed   = 20;
var waitDuration = 500;

function StartTypeWriter()
{
    WriteText();
}

function WriteText()
{
    charIndex++;
    if (charIndex < stringList[stringIndex].length)
    {
        document.getElementById("TypeWriterText").innerHTML = stringList[stringIndex].substring(0, charIndex+1);
        setTimeout(WriteText, writeSpeed);
    }
    else
    {
        setTimeout(EraseText, readDuration);
    }
}

function EraseText()
{
    charIndex--;
    document.getElementById("TypeWriterText").innerHTML = stringList[stringIndex].substring(0, charIndex);
    if (charIndex>0)
    {
        setTimeout(EraseText, eraseSpeed);
    }
    else
    {
        stringIndex = (stringIndex+1) % stringList.length;
        setTimeout(WriteText, waitDuration);
    }
}