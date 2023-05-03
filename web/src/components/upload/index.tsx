import Dropzone from 'react-dropzone';
import style from './Upload.module.scss';

export function Upload() {
	return (
		<section>
			<Dropzone onDrop={files => console.log(files)}>
				{({getRootProps, getInputProps}) => (
					<div className={style['zone']}>
						<div
							{...getRootProps({
								className: 'dropzone',
								onDrop: event => event.stopPropagation()
							})}
						>
							<input {...getInputProps()} />
							<p>Drag drop some files here, or click to select files</p>
						</div>
					</div>
				)}
			</Dropzone>
		</section>
	);
}