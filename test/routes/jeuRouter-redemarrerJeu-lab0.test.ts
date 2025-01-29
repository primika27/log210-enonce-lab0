// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/app';
import { jeuRoutes } from "../../src/routes/jeuRouter";

const request = supertest(app);

const testNom1 = 'Jean-Marc';
const testNom2 = 'Pierre';

describe('GET /api/v1/jeu/redemarrerJeu', () => { 
  beforeAll(async () => {

   await request.post('/api/v1/jeu/redemarrerJeu').send({ nom: testNom1 });
   await request.post('/api/v1/jeu/redemarrerJeu').send({ nom: testNom2 });

  });

  it(`devrait repondre avec succes pour redemarrer`, async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu').send({ nom: testNom1 });
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  it('devrait s’assurer qu’il n’y a plus de joueurs après le redémarrage', async () => {

    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    const response = await request.get('/api/v1/jeu/getJoueurs');

    expect(response.status).toBe(404); 
    expect(joueursArray.length).toBe(0);
  });

})

  