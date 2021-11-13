const sentence = "hello there from lighthouse labs";
const typewriter = function(sentence) {
  let timeout = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char); 
    }, timeout += 50);
  }
}

typewriter(sentence + "\n");