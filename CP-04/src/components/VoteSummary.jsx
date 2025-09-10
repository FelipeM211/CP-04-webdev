export default function VoteSummary({ votes, options }) {
  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0)

  return (
    <div className="mt-10 w-full max-w-4xl bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Resumo dos Votos</h2>

      {totalVotes === 0 ? (
        <p className="text-gray-500">Nenhum voto ainda.</p>
      ) : (
        <ul>
          {options.map(({ id, label }) => (
            <li key={id} className="mb-2 text-gray-800">
              {label}: <strong>{votes[id] || 0}</strong> votos (
              {totalVotes ? ((votes[id] || 0) / totalVotes * 100).toFixed(1) : 0}%)
            </li>
          ))}
          <li className="mt-4 font-semibold">Total: {totalVotes} votos</li>
        </ul>
      )}
    </div>
  )
}
