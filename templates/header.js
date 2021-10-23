var headerHTML = `<nav class="navbar navbar-expand-lg navbar-light">
<a class="navbar-brand" href="home.html"><img src="Images/safecarslimited3.png" height="100px" alt="Logo"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" id="home"  href="./home.html">Home</a>
        </li> 
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Insurance Company
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"  id="igi"  href="IGI insurance Company.html">IGI insurance</a>
                <a class="dropdown-item"  id="adamjee"  href="Adamjee insurance Company.html">Adamjee Insurance</a>
                <a class="dropdown-item"  id="efu"  href="Efu insurance Company .html">EFU Life Insurance</a>
                <a class="dropdown-item" id="ubl"  href="Ubl insurance Company.html">UBL Insurance Limited</a>
                <a class="dropdown-item" id="jubilee"  href="Jubilee insurance Company.html">Jubilee Insurance</a>
                <a class="dropdown-item" id="statelife"  href="Statelife insurance Company .html">State Life Plan Insurance</a>
            </div>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Products
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item"  id="Auto"  href="Auto Direct Insurance.html"> Auto Direct Insurance</a>
            <a class="dropdown-item"  id="Home "  href=" Home Direct Insurance.html"> Home Direct Insurance </a>
            <a class="dropdown-item"  id="Travel "  href=" Travel Direct Insurance.html"> Travel Direct Insurance </a>
            <a class="dropdown-item"  id="Health "  href=" Health Direct Insurance.html">Health Direct Insurance  </a>
            <a class="dropdown-item"  id="Property "  href="Property Insurance.html ">Property Insurance  </a>
            <a class="dropdown-item"  id="Marine "  href="Marine Insurance.html "> Marine Insurance </a>
           
            </div>
    </li>
         
         
        <li class="nav-item">
            <a class="nav-link" id="summary" href="summary.html">Summary</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="contact" href="contact us.html">Contact Us</a>
        </li>
    </ul>
</div>
</nav>`

var getHeaderElement = document.getElementById("header-main");
getHeaderElement.innerHTML = headerHTML

var insurance = document.getElementById("insurance")