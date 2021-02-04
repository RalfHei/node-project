var socket = io();

const messageInput = document.getElementById('message-input');
const privateInput = document.getElementById('message-private');
const chatPrivate = document.getElementsByClassName('chat-private');
const chatMessages = document.getElementsByClassName('chat-messages');
;
const userList = document.getElementById('users');

function outputUsers(users) {
    userList.innerHTML = '';
    users.forEach(user=>{
      const li = document.createElement('li');
      li.innerText = user.username;
      userList.appendChild(li);
    });
   }
//privateInput.focus();

   /*privateInput.addEventListener('keydown', event => {
    if (event.key == 'Enter' && privateInput.value.trim() !== '') {
        socket.emit('chat_message',privateInput.value);
        privateInput.value = '';
    }
});*/

messageInput.focus();

messageInput.addEventListener('keydown', event => {
    if (event.key == 'Enter' && messageInput.value.trim() !== '') {
        socket.emit('chat_message', messageInput.value);
        messageInput.value = '';
    }
});

socket.on('connection', userId => {
    const item = document.createElement('li');
    item.textContent = 'User ' + userId + ' connected';
    chatMessages[0].appendChild(item);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on('updateUserList', userListObj => {
    userList.innerHTML = "";
    for (const userName in userListObj) {
        userList.innerHTML += `
        <div class="hover:bg-gray-100 cursor-pointer" >
            <p class="user  pt-1 px-6" data-socketid="${ userListObj[userName] }">${ userName }</p>
            </div>`;
    }

    const users = document.getElementsByClassName('user');

    Array.prototype.forEach.call(users, el => {
        el.addEventListener('click', create)
    });
});

socket.on('chat_message', msgObj => {
    console.log(msgObj)
    const item = document.createElement('div');
    item.innerHTML = `
        <div>
            <p><b>${ msgObj.user }</b></p>
            <p>${ msgObj.message }</p>
        </div>
    `
    chatMessages[0].appendChild(item);

});

socket.on('some', msgObj => {
    console.log(msgObj)
    const item = document.createElement('div');
    create()
    item.innerHTML = `
        <div>
            <p><b>${ msgObj.user }</b></p>
            <p>Yo!</p>
        </div>
    `
    chatMessages.appendChild(item);
});
function tabs(){

  let tabsContainer = document.querySelector("#header");
  
  let tabTogglers = tabsContainer.querySelectorAll("a");
  console.log(tabTogglers);
  
  tabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
      e.preventDefault();
  
      let tabName = this.getAttribute("href");
  
      let tabContents = document.querySelector("#tab-contents");
  
      for (let i = 0; i < tabContents.children.length; i++) {
        
        tabTogglers[i].parentElement.classList.remove("border-t", "border-r", "border-l", "-mb-px", "bg-white");  tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) {
          continue;
        }
        tabContents.children[i].classList.add("hidden");
        
      }
      e.target.parentElement.classList.add("border-t", "border-r", "border-l", "-mb-px", "bg-white");
    });
  });
}

document.getElementById('logout').onclick = function() {
  console.log('logout');
  location.href = '/logout';
};


  function create(el) {
    let socketId = el.currentTarget.dataset.socketid;
    console.log(el)
    console.log(socketId)
    const header = document.getElementById('header');
    const body_tab = document.getElementById('tab-contents');
    const tab_id  = document.getElementById(socketId)
console.log(tab_id)
    if(tab_id == null) {
      let tab_header = document.createElement("div");
      tab_header.innerHTML = `
      <div class="bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t w-max  border-r border-l"><a id="${socketId}" href="#${socketId}">Tab 1</a></div>
      `
      header.append(tab_header);
      let tab_body = document.createElement("div");
      tab_body.setAttribute("id", socketId)
      tab_body.classList.add("chat-private")
      tab_body.innerHTML = `<div
      class="px-2 chat-footer bg-white opacity-60 focus-within:opacity-100 rounded border border-gray-400 h-20 absolute left-2.5 right-2.5 bottom-10 m-4">
      <input class="px-4 bg-transparent focus:outline-none h-10 w-full" id="private-input" type="text"
          value="" placeholder="Aa" />
      <div class="h-10  border-t w-full"></div>
  </div>`
      body_tab.append(tab_body)
  
      tabs()
    }else{
      console.log("tab exists")
    }
   
    /*   <div class="rounded border w-1/2 mx-auto mt-4">
    <!-- Tabs -->
      <ul id="tabs" class="inline-flex pt-2 px-1 w-full border-b">
        <li class="bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px"><a id="default-tab" href="#first">Tab 1</a></li>
        <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#second">Tab 2</a></li>
        <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#third">Tab 3</a></li>
        <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#fourth">Tab 4</a></li>
      </ul>
    
      <!-- Tab Contents -->
      <div id="tab-contents">
        <div id="first" class="p-4">
          First tab
        </div>
        <div id="second" class="hidden p-4">
          Second tab
        </div>
        <div id="third" class="hidden p-4">
          Third tab
        </div>
        <div id="fourth" class="hidden p-4">
          Fourth tab
        </div>
      </div>
    </div>*/
  }