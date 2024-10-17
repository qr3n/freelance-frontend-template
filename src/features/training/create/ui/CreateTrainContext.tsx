'use client';

import { FormProvider, useForm } from "react-hook-form";
import { ICreateTrainFormValues } from "../model";
import { PropsWithChildren } from "react";

export const CreateTrainContext = (props: PropsWithChildren) => {
    const methods = useForm<ICreateTrainFormValues>({
        defaultValues: {
            title: 'Название'
        }
    })

    const onSubmit = (data: ICreateTrainFormValues) => {

    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {props.children}
            </form>
        </FormProvider>
    )
}
