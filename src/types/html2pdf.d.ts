declare module "html2pdf.js" {
  interface Html2PdfOptions {
    jsPDF?: object;
    html2canvas?: object;
  }

  interface Html2Pdf {
    from(element: HTMLElement): Html2Pdf;
    set(options: Html2PdfOptions): Html2Pdf;
    save(): void;
  }

  function html2pdf(): Html2Pdf;

  export = html2pdf;
}
