async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		console.log('Text copied to clipboard:', text);
	} catch (err) {
		console.error('Error copying text:', err);
	}
}

function formatTable(input) {
	const lines = input.split('\n');
	const formattedLines = lines.map((line) => line.split('\t').join('\t'));
	return formattedLines.join('\n');
}

async function main() {
	const table = prompt('Please input your table:');
	const tsvOutput = formatTable(table);

	await copyToClipboard(tsvOutput);
}

main();
