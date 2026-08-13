import { createRoot } from "react-dom/client";
import "./style.css";

const authors = [
  { name: "Hsuanling Lee", affiliations: "1,2", equalContribution: true, url: "https://hsuanlinglee.net/" },
  { name: "Hal Sugiyama", affiliations: "1", equalContribution: true },
  { name: "Tian Min", affiliations: "1", url: "https://welkin.dev/" },
  { name: "Hanako Fujino", affiliations: "1" },
  { name: "Mayuka Kuwana", affiliations: "3", url: "https://nashiro66.github.io/" },
  { name: "Yuta Sugiura", affiliations: "1", url: "https://lclab.org/people/yutasugiura" },
  { name: "Mustafa Doga Dogan", affiliations: "4", url: "https://www.dogadogan.com/" },
  { name: "Liang He", affiliations: "2", url: "https://www.lianghe.me/" },
  { name: "Koya Narumi", affiliations: "1", url: "https://pplab.jp/" },
];

function App() {
  return <main className="page">
    <section className="hero-section">
      <h1 className="title">InvisIto: Weaving Unobtrusive Infrared Markers <span>for Ubiquitous Textile Interaction</span></h1>
      <div className="authors">{authors.map((author, index) => <span key={author.name}>{author.url ? <a href={author.url}>{author.name}</a> : author.name}{author.equalContribution && <sup>*</sup>}<sup>{author.affiliations}</sup>{index < authors.length - 1 ? ", " : ""}</span>)}</div>
      <p className="equal-contribution"><sup>*</sup>Both authors contributed equally to this research.</p>
      <div className="institutions"><span><sup>1</sup>Keio University, Kanagawa, Japan</span><span><sup>2</sup>The University of Texas at Dallas, Richardson, TX, USA</span><span><sup>3</sup>The University of Tokyo, Tokyo, Japan</span><span><sup>4</sup>Adobe Research, Basel, Switzerland</span></div>
      <p className="venue"><a href="https://uist.acm.org/2026/">The 39th Annual ACM Symposium on User Interface Software and Technology (UIST ’26), November 2–5, 2026, Detroit, MI, USA</a></p>
      <div className="buttons"><a className="button" href="./invisito-paper.pdf"><span className="paper-icon" aria-hidden="true" />Paper</a><a className="button" href="#video"><span className="video-icon" aria-hidden="true" />Video</a><a className="button" href="#bibtex"><span>&lt;/&gt;</span>BibTeX</a></div>
    </section>
    <section className="section abstract-section"><h2 className="section-title">Abstract</h2><p>Textiles are increasingly explored as media for interacting with digital information. However, many of the existing approaches rely on visible tags, printed overlays, or electronic modules that compromise the fabric’s aesthetic and tactile qualities. To address this, we present <i>InvisIto</i>, a method for weaving visually unobtrusive yet machine-readable infrared markers directly into fabrics using near-infrared (NIR)-absorbing yarns. Although these yarns look similar to standard fibers in ambient light, they produce strong contrast in NIR imaging. Our method includes: (1) a design tool that helps users easily embed infrared markers into weaving drafts, (2) five disguising strategies that further reduce marker visibility under ambient light, and (3) a camera-based detection pipeline for decoding and tracking the woven markers. InvisIto supports both woven QR codes for data encoding and woven ArUco markers for binary input and deformation tracking. We demonstrate applications across hand weaving, Jacquard weaving, and industrial fabrication, showing that InvisIto supports interaction and fabrication across scales, from bespoke artifacts to mass production.</p></section>
    <section className="section" id="video"><h2 className="section-title">Video</h2><div className="video-placeholder">Project video coming soon.</div></section>
    <section className="section" id="bibtex"><h2 className="section-title">BibTeX</h2><pre>{`@inproceedings{lee2026invisito,\n  title={InvisIto: Weaving Unobtrusive Infrared Markers for Ubiquitous Textile Interaction},\n  author={Lee, Hsuanling and Sugiyama, Hal and Min, Tian and Fujino, Hanako and Kuwana, Mayuka and Sugiura, Yuta and Dogan, Mustafa Doga and He, Liang and Narumi, Koya},\n  booktitle={The 39th Annual ACM Symposium on User Interface Software and Technology},\n  year={2026},\n  doi={10.1145/3830398.3830562}\n}`}</pre></section>
    <footer>This website is built on top of the original <a href="https://nerfies.github.io/">Nerfies</a> website template.</footer>
  </main>;
}

createRoot(document.getElementById("root")!).render(<App />);
