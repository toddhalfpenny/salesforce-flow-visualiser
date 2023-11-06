/**
 * renderConfig.js
 */
export const NODE_CONFIG = {
	'actionCalls': {
		background: "#344568",
		color: "white",
		label: "Action",
		icon: "<&pulse>",
		mermaidIcon: {
			"apex": ">_",
			"emailAlert" : "✉",
			"emailSimple": "✉",
			"submit": "⚡"

		},
		mermaidClose: ")",
		mermaidOpen: "("
	},
	'assignments': {
		background: "#F97924",
		color: "white",
		label: "Assignment",
		icon: "<&menu>",
		mermaidIcon: "⚌" ,
		mermaidClose: ")",
		mermaidOpen: "("
	},
	'decisions': {
		background: "#DD7A00",
		color: "white",
		label: "Decision",
		icon: "<&fork>",
		mermaidIcon: "⇋" ,
		mermaidClose: "}}",
		mermaidOpen: "{{"
	},
	'loops': {
		background: "#E07D1C",
		mermaidIcon: "↻",
		mermaidClose: ")",
		mermaidOpen: "("
	},
	'recordCreates': {
		background: "#F9548A",
		color: "white",
		label: "Create Records",
		icon: "<&medical-cross>",
		mermaidIcon: "+" ,
		mermaidClose: ")",
		mermaidOpen: "("
	},
	'recordLookups': {
		background: "#F9548A",
		color: "white",
		label: "Create Records",
		icon: "<&medical-cross>",
		mermaidIcon: "🔍" ,
		mermaidClose: ")",
		mermaidOpen: "("
	},
	'recordUpdates': {
		background: "#F9548A",
		color: "white",
		label: "Update Records",
		icon: "<&pencil>",
		mermaidIcon: "📝" ,
		mermaidClose: ")",
		mermaidOpen: "("
	},
	'screens': {
		background: "#1B96FF",
		color: "white",
		label: "Screen",
		icon: "<&pencil>",
		mermaidIcon: "💻" ,
		mermaidClose: ")",
		mermaidOpen: "("
	},
};