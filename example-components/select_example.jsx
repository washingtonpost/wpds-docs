import React from 'react'
import {
    Select,
    SelectOption
} from "@washingtonpost/site-components/core/select";

function SelectExample() {
    return (
        <Select label="Label text">
            <SelectOption>Sample Option #1</SelectOption>
            <SelectOption>Sample Option #2</SelectOption>
            <SelectOption>Sample Option #3</SelectOption>
            <SelectOption>Sample Option #4</SelectOption>
            <SelectOption>Sample Option #5</SelectOption>
            <SelectOption>Sample Option #6</SelectOption>
        </Select>
    )
}

function ErrorExample() {
    return (
        <Select
        errorMessage="Please select a country"
        isValid={false}
        label="Label text">
            <SelectOption>Sample Option #1</SelectOption>
            <SelectOption>Sample Option #2</SelectOption>
            <SelectOption>Sample Option #3</SelectOption>
            <SelectOption>Sample Option #4</SelectOption>
            <SelectOption>Sample Option #5</SelectOption>
            <SelectOption>Sample Option #6</SelectOption>
        </Select>
    )
}

function DisabledExample() {
    return (
        <Select isDisabled={true} label="Label text">
            <SelectOption>Sample Option #1</SelectOption>
            <SelectOption>Sample Option #2</SelectOption>
            <SelectOption>Sample Option #3</SelectOption>
            <SelectOption>Sample Option #4</SelectOption>
            <SelectOption>Sample Option #5</SelectOption>
            <SelectOption>Sample Option #6</SelectOption>
        </Select>
    )
}

function MonthExample() {
    return (
        <Select label="Favorite month">
            <SelectOption>Jan.</SelectOption>
            <SelectOption>Feb.</SelectOption>
            <SelectOption>Mar.</SelectOption>
            <SelectOption>Apr.</SelectOption>
            <SelectOption>May.</SelectOption>
            <SelectOption>Jun.</SelectOption>
            <SelectOption>Jul.</SelectOption>
            <SelectOption>Aug.</SelectOption>
            <SelectOption>Sept.</SelectOption>
            <SelectOption>Oct.</SelectOption>
            <SelectOption>Nov.</SelectOption>
            <SelectOption>Dev.</SelectOption>
        </Select>
    )
}

function PinkThings() {
    return (
        <Select label="Favorite Pink Thing">
            <SelectOption>Patrick Star</SelectOption>
            <SelectOption>Bubble gum</SelectOption>
            <SelectOption>Flamingo</SelectOption>
            <SelectOption>Kirby</SelectOption>
            <SelectOption>Pink Panther</SelectOption>
            <SelectOption>Slowpoke</SelectOption>
            <SelectOption>Eraser</SelectOption>
            <SelectOption>Pencil Bubble gum</SelectOption>
        </Select>
    )
}


export {SelectExample,PinkThings,MonthExample,DisabledExample,ErrorExample}

