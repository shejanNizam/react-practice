export default function MyButton({ count, onCount }) {
  return (
    <>
      <button onClick={onCount}>Clieked {count} times</button>
    </>
  );
}
