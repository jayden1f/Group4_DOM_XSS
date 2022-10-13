function sanitize(input){
    safe = "";
    for (let chr of input){
        if(chr == '<'){
            safe += "&lt";
        }
        else if(chr == '>'){
            safe += "&gt";
        }
        else if(chr == '\"'){
            safe += "&quot";
        }
        else if(chr == '\''){
            safe += "&apos;";
        }
        else if(chr == '&'){
            safe += "&amp";
        }
        else{
            safe += chr;
        }
    }
    return safe;
}
// this function will be used to sanitize user input and convert characters to HTML safe references 
// source for named character references https://html.spec.whatwg.org/multipage/named-characters.html