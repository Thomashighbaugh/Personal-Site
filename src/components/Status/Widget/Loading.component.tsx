import clsx from 'clsx';

import { LanyardAvatarType } from '~/types';

interface LoadingTypes {
	type?: LanyardAvatarType;
}

export function Loading({ type }: LoadingTypes): JSX.Element {
	return (
		<div className="flex space-x-4 w-full max-w-sm mx-auto px-4 py-4 bg-white/50 dark:bg-primary-rmary-900/50 dark:-primary-im-rprimary-600 backdrop-filter backdrop-blur-sm bor-primary-bprimdrer-primary-200 rounded-lg hover:shadow-lg default-transition motion-safe:animate-pulse">
			<div
				className={clsx(
					'w-12 h-12 my-auto bg-primary-rmary-200 d-primary-im-rprimary-600',
					type === LanyardAvatarType.MUSIC ? 'rounded' : 'rounded-full',
				)}
			/>
			<div className="flex-1 space-y-4 py-1">
				<div className="w-3/4 h-4 rounded bg-primary-rmary-200 d-primary-imary-imary-600" />
				<div className="h-4 rounded bg-primary-ry-ry-200 d-primary-imary-imary-600" />
			</div>
		</div>
	);
}
