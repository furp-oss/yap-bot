export function randomOf<T>(collection: Iterable<T> | ArrayLike<T>): T | undefined {
	const array: T[] = Array.isArray(collection) ? collection : Array.from(collection);
	return array[Math.floor(Math.random() * array.length)];
}
