window.watsonAssistantChatOptions = {
    integrationID: "8519a995-255c-4578-8b56-a0d16ae969bc", 
    region: "au-syd", 
    serviceInstanceID: "8d321313-7b32-4633-9348-a809d19354ef",
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
  document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.getElementById("read-more-button");
    const additionalText = document.getElementById("additional-text");

    readMoreButton.addEventListener("click", function () {
        if (additionalText.style.display === "none") {
            additionalText.style.display = "block";
            readMoreButton.textContent = "Voltar";
        } else {
            additionalText.style.display = "none";
            readMoreButton.textContent = "Ler Mais";
        }
    });
});
