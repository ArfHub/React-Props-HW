import './Nav.css'

function Nav() {
  return (
    <header>
      <div className="navbar">
      <a href="">English</a>
      <a href="">تسجيل الدخول </a>
      
        <ul className="links">
            <li><a href="#">مركز الاختبارات</a></li>
            <li><a href="#">الأكاديميات التابعة</a> </li>
            <li><a href="#">حول الأكاديمية</a></li>
            <li><a href="#">المعسكرات والبرامج</a></li>
            <li><a href="#">الرئيسية</a></li>
        </ul>
        <div><img src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png"></img></div>
          <div className="drobBtn">
          <i class="fa-solid fa-bars"></i>
          </div>
      </div>

      <div className="dropMenu">
            <li><a href="#">مركز الاختبارات</a></li>
            <li><a href="#">الأكاديميات التابعة</a> </li>
            <li><a href="#">حول الأكاديمية</a></li>
            <li><a href="#">المعسكرات والبرامج</a></li>
            <li><a href="#">الرئيسية</a></li>
      </div>
    </header>
  )
}

export default Nav