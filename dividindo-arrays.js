const nomes = ['luis', 'eduardo', 'miguel',
    'joão', 'cristiane', 'juliana', 'kamile',
    'sofia', 'ines', 'ilson', 'reginaldo',
    'royo', 'gabriel', 'rodrigues'];

    const sala1 = nomes.slice(0,nomes.length/2);
    const sala2 = nomes.slice(nomes.length/2);

    console.log(`Alunos da sala 1: ${sala1}`);
    console.log(`Alunos da sala 2: ${sala2}`);