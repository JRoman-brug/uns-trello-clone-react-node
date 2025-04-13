//Icons
import { FaPlus } from 'react-icons/fa6'

//Shadcn
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type ProjectForm = {
	name: string,
	background: string
}


function AddProjectCard() {
	const [open, setOpen] = useState(false);

	const colors = [
		{key:"Blue", color:"#00d2ff,#3a47d5"},
		{key:"Red", color:"#B90091,#ED6A5A"},
		{key:"Green", color:"#48C90C,#27CC92"},
		{key:"Violet", color:"#3F2B96,#A8C0FF"},
		{key:"Orange", color:"#BB1900,#FFB000"}
	]

	//Form
	const {
		register,
		formState: { errors },
		reset,
		watch,
		handleSubmit
	} = useForm<ProjectForm>({defaultValues:{background:colors[0].color}})

	
	const onSubmit: SubmitHandler<ProjectForm> = (data) => {
		console.log("onSubmit project: " + data.name + " gradient: " + data.background)
		console.log(data.background)
		setOpen(false)
		reset()
	}
	const color = watch("background")
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<div className="w-[250px] h-[100px] flex justify-center items-center cursor-pointer border-[3px] border-white border-dashed hover:scale-105 transition-all duration-200 ease-in-out">
					<FaPlus size={30} className="text-white" />
				</div>
			</DialogTrigger>
			<DialogContent className='text-white bg-background-dark border-background-dark' onCloseAutoFocus={() => reset()}>
				<DialogTitle className=''>Add new proyect</DialogTitle>
				<DialogDescription asChild	>
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
						<div className='flex flex-col justify-center'>
							<label htmlFor="color">Color</label>
							<select id="color"
								{...register("background")}
								onSelect={(e) => console.log(e)} className='w-48 h-8 mt-1 text-black bg-appLight rounded-xs pl-2 outline-none placeholder:text-gray-700'>
								
								{colors.map((elem) => ( 
									<option key={elem.key} value={elem.color}>{elem.key}</option>
								))}
								
							</select>
							<div className='w-full mt-4 h-40 transition-colors' 
								style={{background: `linear-gradient(to bottom right, ${color}`}}
								>

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
