const exercise1 = (n1, n2, n3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof(n1) !== 'number' || typeof(n2) !== 'number' || typeof(n3) !== 'number') return reject("Informe apenas números");
    if (n1 + n2 + n3 < 50) return reject("Valor muito baixo");
    resolve((n1 + n2) * n3);
  });

  return promise;
}

module.exports = exercise1;
