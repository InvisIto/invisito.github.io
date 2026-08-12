const authors = [
  "Hsuanling Lee", "Hal Sugiyama", "Tian Min", "Hanako Fujino", "Mayuka Kuwana",
  "Yuta Sugiura", "Mustafa Doga Dogan", "Liang He", "Koya Narumi",
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero-section">
        <h1 className="title">InvisIto: Weaving Unobtrusive Infrared Markers<br />for Ubiquitous Textile Interaction</h1>
        <div className="authors">
          {authors.map((author, index) => <span key={author}>{author}{index < authors.length - 1 ? " · " : ""}</span>)}
        </div>
        <div className="institutions">
          University of Texas at Dallas &nbsp;&nbsp; Keio University &nbsp;&nbsp; The University of Tokyo &nbsp;&nbsp; Adobe Research
        </div>
        <p className="venue">UIST 2026</p>
        <div className="buttons">
          <a className="button" href="https://doi.org/10.1145/3830398.3830562"> <span>📄</span> Paper</a>
          <a className="button" href="#video"><span>▶</span> Video</a>
          <a className="button" href="#bibtex"><span>&lt;/&gt;</span> BibTeX</a>
        </div>
      </section>

      <section className="section abstract-section">
        <h2 className="section-title">Abstract</h2>
        <p>
          Textiles are increasingly explored as media for interacting with digital information. However, many of the existing approaches rely on visible tags, printed overlays, or electronic modules that compromise the fabric’s aesthetic and tactile qualities. To address this, we present <i>InvisIto</i>, a method for weaving visually unobtrusive yet machine-readable infrared markers directly into fabrics using near-infrared (NIR)-absorbing yarns. Although these yarns look similar to standard fibers in ambient light, they produce strong contrast in NIR imaging. Our method includes: (1) a design tool that helps users easily embed infrared markers into weaving drafts, (2) five disguising strategies that further reduce marker visibility under ambient light, and (3) a camera-based detection pipeline for decoding and tracking the woven markers. InvisIto supports both woven QR codes for data encoding and woven ArUco markers for binary input and deformation tracking. We demonstrate applications across hand weaving, Jacquard weaving, and industrial fabrication, showing that InvisIto supports interaction and fabrication across scales, from bespoke artifacts to mass production.
        </p>
      </section>

      <section className="section" id="video">
        <h2 className="section-title">Video</h2>
        <div className="video-placeholder">Project video coming soon.</div>
      </section>

      <section className="section" id="bibtex">
        <h2 className="section-title">BibTeX</h2>
        <pre>{`@inproceedings{lee2026invisito,
  title={InvisIto: Weaving Unobtrusive Infrared Markers for Ubiquitous Textile Interaction},
  author={Lee, Hsuanling and Sugiyama, Hal and Min, Tian and Fujino, Hanako and Kuwana, Mayuka and Sugiura, Yuta and Dogan, Mustafa Doga and He, Liang and Narumi, Koya},
  booktitle={The 39th Annual ACM Symposium on User Interface Software and Technology},
  year={2026},
  doi={10.1145/3830398.3830562}
}`}</pre>
      </section>

      <footer>This website is built on top of the original <a href="https://nerfies.github.io/">Nerfies</a> project-page template.</footer>
    </main>
  );
}
