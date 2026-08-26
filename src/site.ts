/**
 * Single place to edit real-world data.
 * Everything here is language-independent — copy lives in src/content/.
 */
export const site = {
  /** Leave empty until the address is confirmed; the site falls back to LinkedIn. */
  email: "barbarapaschoalini@gmail.com",

  linkedinUrl: "https://www.linkedin.com/in/barbara-paschoalini-a948003a7",
  linkedinHandle: "linkedin.com/in/barbara-paschoalini-a948003a7",

  /**
   * Put the PDF in /public and set the file name here, e.g.
   * "/curriculo-barbara-paschoalini.pdf". Empty hides the download link.
   */
  resumePdf: "",
} as const;
