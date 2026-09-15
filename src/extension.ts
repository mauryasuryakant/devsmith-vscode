import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const provider = new DevSmithProvider();

	context.subscriptions.push(
		vscode.window.registerTreeDataProvider(
			'devsmith.hello',
			provider
		)
	);
}

class DevSmithProvider implements vscode.TreeDataProvider<vscode.TreeItem> {

	getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
		return element;
	}

	getChildren(): vscode.TreeItem[] {
		return [
			new vscode.TreeItem('Hello from devsmith')
		];
	}
}

export function deactivate() {}