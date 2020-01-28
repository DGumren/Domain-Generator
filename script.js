window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let d = 0; d < noun.length; d++) {
        this.console.log(`${pronoun[i]}${adj[x]}${noun[d]}.com`);
      }
    }
  }
};
