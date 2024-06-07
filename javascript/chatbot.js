window.watsonAssistantChatOptions = {
    integrationID: "8519a995-255c-4578-8b56-a0d16ae969bc", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "8d321313-7b32-4633-9348-a809d19354ef", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });