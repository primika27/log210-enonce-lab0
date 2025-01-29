import 'jest-extended';
import path from 'path';
import { readFileSync } from 'fs';

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'Squelette.md');
  content = readFileSync(filename, 'utf-8');
});

describe('README identification', () => {
  it('Primika Khayargoli', () => {
    expect(content.includes("Entrer votre nom")).toBeFalsy();
  });

  it('primika.khayargoli.1@ens.etsmlt.ca', () => {
    expect(content.includes("Entrer votre courriel")).toBeFalsy();
  });

  it('KHAP89290201', () => {
    expect(content.includes("Entrer votre code moodle obtenu à partir de Signets")).toBeFalsy();
  });

  it("primika27", () => {
    expect(content.includes("Entrer l'identifiant de votre compte github")).toBeFalsy();
  });
});
