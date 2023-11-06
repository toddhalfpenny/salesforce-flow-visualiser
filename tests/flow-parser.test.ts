import { parseFlow } from '../src/flowParser';

test('parses a flow to mermaid', () => {
    const result = parseFlow('123', 'mermaid');
    expect(result).toBe("Going to render as mermaid");
});

test('parses a flow to plantuml', () => {
    const result = parseFlow('123', 'plantuml');
    expect(result).toBe("Going to render as plantuml");
});