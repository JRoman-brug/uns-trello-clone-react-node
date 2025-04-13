//Icons
import { FaPlus } from 'react-icons/fa6'

//Shadcn
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProjectType } from '@/types/dataTypes';

function AddProjectCard() {
	const [open, setOpen] = useState(false);

	//Form
	const {
		register,
		formState: { errors },
		reset,
		handleSubmit
	} = useForm<ProjectType>()

	const onSubmit: SubmitHandler<ProjectType> = (data) => {
		console.log("onSubmit project: " + data.name+" gradient: "+data.gradient)
		setOpen(false)
		reset()
	}
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<div className="w-[250px] h-[100px] flex justify-center items-center cursor-pointer border-[3px] border-white border-dashed hover:scale-105 transition-all duration-200 ease-in-out">
					<FaPlus size={30} className="text-white" />
				</div>
			</DialogTrigger>
			<DialogContent className='text-white bg-background-dark border-background-dark' onCloseAutoFocus={()=>reset()}>
				<DialogTitle className=''>Add new proyect</DialogTitle>
				<DialogDescription>
					<form onSubmit={handleSubmit(onSubmit)} className='text-white flex flex-col gap-2'>
						<div>
							<label className='block mb-1' htmlFor="name">Project name</label>
							<div className='flex justify-start items-center gap-2'>
								<input
									className='w-48 h-8 text-black bg-appLight rounded-xs p-2 outline-none placeholder:text-gray-700'
									{...register('name', {
										required: true,
										pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/
									})}
									placeholder='Name' type="text" maxLength={20} />
								{errors.name?.type === 'required' && (<p role='alert' className='text-red-500'>Name is required</p>)}
								{errors.name?.type === 'pattern' && (<p role='alert' className='text-red-500'>Only alphanumeric characters</p>)}
							</div>
						</div>
						<div className='flex justify-center gap-4'>
							<div className='flex-1/2 flex-col items-center'>
								<label htmlFor="firstColor">FirstColor</label>
								<input
									{...register('gradient.0',)}
									type="color" defaultValue={'#B90091'} className='w-full h-20 outline-none rounded-md p-0' />
							</div>
							<div className='flex-1/2 flex-col items-center'>
								<label htmlFor="secondColor">SecondColor</label>
								<input
									{...register('gradient.1')} 
									type="color" defaultValue={'#ED6A5A'} className='w-full h-20 outline-none rounded-md p-0'/>
							</div>
						</div>
						<input type="submit" />
					</form>
				</DialogDescription>
			</DialogContent>
		</Dialog>
	)
}

export default AddProjectCard
