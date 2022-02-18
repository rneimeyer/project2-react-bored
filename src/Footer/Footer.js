import "./Footer.css";

function Footer({ colorTheme }) {
  return (
    <div className={`footer ${colorTheme}`}>
      <p>Created by Rebecca Neimeyer - 2022</p>
    </div>
  );
}

export default Footer;
