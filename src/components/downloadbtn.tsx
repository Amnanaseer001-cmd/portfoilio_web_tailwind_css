
export default function downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; 
    link.download = 'Amna_Naseer_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  