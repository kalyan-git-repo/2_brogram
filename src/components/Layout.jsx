export default function Layout(props) {

    const { children } = props
    const header = (
        <header>
            <h1 className="text-gradient">Program</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>

    )
    const footer = (
        <footer>
            <p>Build by <a href="https://kalyan-web-portfolio.netlify.app/" target="_blank">kalyan</a>
            <br />Styled with <a href="https://github.com/kalyan-git-repo/Fanta_CSS" target="_blank">FantaCSS</a></p>
        </footer>
    )
    return (
        <>
            {header}
            {children}  
            {footer}
        </>
    )
}

