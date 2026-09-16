function History({ moves }) {
  return (
    <div className="border border-gray-500 w-2xs p-4 rounded-lg">
      <ol>{moves}</ol>
    </div>
  );
}

export default History;
