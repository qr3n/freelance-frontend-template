'use client';

import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { useState, ReactNode } from "react";
import { Identifiable } from "../model";

function reorder<T extends Identifiable>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
}

interface DraggableListProps<T extends Identifiable> {
    items: T[],
    renderItem: (item: T, index: number) => ReactNode
}

export function DraggableList<T extends Identifiable>({ items, renderItem }: DraggableListProps<T>) {
    const [state, setState] = useState(items);

    function onDragEnd(result: DropResult) {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const reorderedItems = reorder(
            state,
            result.source.index,
            result.destination.index
        );

        setState(reorderedItems);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
                {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {state.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {provided => (
                                    <div
                                        className='mb-4'
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        {renderItem(item, index)}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}