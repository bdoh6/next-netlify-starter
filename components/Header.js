export default function Header({ title }) {
  return <h1 className="title">{title}</h1>
  <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <input type="text" placeholder="Search..">
</div>
}
