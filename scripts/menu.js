var headerText = `<div class="divMenu">
<nav class="menu">
    <div class="inmenu_cont">
    <ul class="menu_list">
     
        <li>
            <a href="" class="menu_link">История церкви</a>
            <span class="menu_arrow arrow"></span>
            <ul class="sub-menu_list">
                <li class="sub-menu_link"><a href="./history01.html" class="menu_link">Вопрос 1</a></li>
                <li class="sub-menu_link"><a href="./history02.html" class="menu_link">Вопрос 2</a></li>
                <li class="sub-menu_link"><a href="./history03.html" class="menu_link">Вопрос 3</a></li>
                <li class="sub-menu_link"><a href="./history04.html" class="menu_link">Вопрос 4</a></li>
                <li class="sub-menu_link"><a href="./history05.html" class="menu_link">Вопрос 5</a></li>
                <li class="sub-menu_link"><a href="./history06.html" class="menu_link">Вопрос 6</a></li>
                <li class="sub-menu_link"><a href="./history07.html" class="menu_link">Вопрос 7</a></li>
                <li class="sub-menu_link"><a href="./history08.html" class="menu_link">Вопрос 8</a></li>
                <li class="sub-menu_link"><a href="./history09.html" class="menu_link">Вопрос 9</a></li>
                <li class="sub-menu_link"><a href="./history10.html" class="menu_link">Вопрос 10</a></li>
                <li class="sub-menu_link"><a href="./history11.html" class="menu_link">Вопрос 11</a></li>
                <li class="sub-menu_link"><a href="./history12.html" class="menu_link">Вопрос 12</a></li>
                <li class="sub-menu_link"><a href="./history13.html" class="menu_link">Вопрос 13</a></li>
                <li class="sub-menu_link"><a href="./history14.html" class="menu_link">Вопрос 14</a></li>
                
            </ul>
        </li>

        <li>
            <a href="" class="menu_link">Русская православная культура</a>
            <span class="menu_arrow arrow"></span>
            <ul class="sub-menu_list">
                <li class="sub-menu_link"><a href="./culture01.html" class="menu_link">Вопрос 1</a></li>
                <li class="sub-menu_link"><a href="./culture02.html" class="menu_link">Вопрос 2</a></li>
                <li class="sub-menu_link"><a href="./culture03.html" class="menu_link">Вопрос 3</a></li>
                <li class="sub-menu_link"><a href="./culture04.html" class="menu_link">Вопрос 4</a></li>
                <li class="sub-menu_link"><a href="./culture05.html" class="menu_link">Вопрос 5</a></li>
                <li class="sub-menu_link"><a href="./culture07.html" class="menu_link">Вопрос 7</a></li>
                <li class="sub-menu_link"><a href="./culture08.html" class="menu_link">Вопрос 8</a></li>
                <li class="sub-menu_link"><a href="./culture09.html" class="menu_link">Вопрос 9</a></li>
                <li class="sub-menu_link"><a href="./culture10.html" class="menu_link">Вопрос 10</a></li>
                
           </ul>
        </li>
        
        <li>
            <a href="" class="menu_link">Философия и теология</a>
            <span class="menu_arrow arrow"></span>
            <ul class="sub-menu_list">
                <li class="sub-menu_link"><a href="./philosophy01.html" class="menu_link">Вопрос 1</a></li>
                <li class="sub-menu_link"><a href="./philosophy02.html" class="menu_link">Вопрос 2</a></li>
                <li class="sub-menu_link"><a href="./philosophy03.html" class="menu_link">Вопрос 3</a></li>
                <li class="sub-menu_link"><a href="./philosophy04.html" class="menu_link">Вопрос 4</a></li>
                <li class="sub-menu_link"><a href="./philosophy05.html" class="menu_link">Вопрос 5</a></li>
                <li class="sub-menu_link"><a href="./philosophy07.html" class="menu_link">Вопрос 7</a></li>
                <li class="sub-menu_link"><a href="./philosophy08.html" class="menu_link">Вопрос 8</a></li>
                <li class="sub-menu_link"><a href="./philosophy09.html" class="menu_link">Вопрос 9</a></li>
                <li class="sub-menu_link"><a href="./philosophy10.html" class="menu_link">Вопрос 10</a></li>
           </ul>
        </li>
        
        <li>
            <a href="#" class="menu_link">Религия, государство и общество</a>
            <span class="menu_arrow arrow"></span>
            <ul class="sub-menu_list">
                <li class="sub-menu_link"><a href="./state01.html" class="menu_link">Вопрос 1</a></li>
                <li class="sub-menu_link"><a href="./state02.html" class="menu_link">Вопрос 2</a></li>
                <li class="sub-menu_link"><a href="./state03.html" class="menu_link">Вопрос 3</a></li>
                <li class="sub-menu_link"><a href="./state04.html" class="menu_link">Вопрос 4</a></li>
                <li class="sub-menu_link"><a href="./state05.html" class="menu_link">Вопрос 5</a></li>
                <li class="sub-menu_link"><a href="./state07.html" class="menu_link">Вопрос 7</a></li>
                <li class="sub-menu_link"><a href="./state08.html" class="menu_link">Вопрос 8</a></li>
                <li class="sub-menu_link"><a href="./state09.html" class="menu_link">Вопрос 9</a></li>
                <li class="sub-menu_link"><a href="./state10.html" class="menu_link">Вопрос 10</a></li>
           </ul>
        </li>
    </div>
</nav>
</div>`;
    
    function setHeader() {
      var header =  document.createElement("div");
      header.innerHTML = headerText ;
      document.body.insertAdjacentElement('afterbegin', header );
    }
    
    setHeader();
    
      
            
