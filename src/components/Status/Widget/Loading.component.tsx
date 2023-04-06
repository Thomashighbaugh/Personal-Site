import React from 'react';

export function Loading(): JSX.Element {
	return (
		<div className="flex space-x-4 w-full max-w-sm mx-auto px-4 py-4 bg-white/50 dark:bg-primary-900/50 dark:text-primary-600 shadow-lg rounded-lg">
			<div className="flex-1 space-y-4 py-1">
				<div className="w-3/4 h-4 rounded bg-primary-rmary-200 d-primary-imary-imary-600" />
				<div className="h-4 rounded bg-primary-ry-ry-200 d-primary-imary-imary-600" />
			</div>
		</div>
	);
};

