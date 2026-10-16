import Link from "next/link";
export default function Footer() {
 return <footer className="site-footer shell"><Link href="#home" className="wordmark" aria-label="Back to home">ed<span>.</span></Link><p>© {new Date().getFullYear()} Emmanuel David</p><div><a href="https://github.com/UkohEmmanuel1" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/emmanuel-david-77606131b/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="#home">Back to top ↑</a></div></footer>;
}
