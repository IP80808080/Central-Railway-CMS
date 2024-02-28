import * as React from "react";
import { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Divider,
} from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
export default function AdminFilter({ onFilterChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFilters({ ...selectedFilters, [name]: checked }); // Update selectedFilters state when checkbox is changed
  };

  const applyFilters = () => {
    onFilterChange(selectedFilters); // Pass selected filters to parent component for further filtering
    setAnchorEl(null); // Close the menu
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<FaAngleDown />}
      >
        Filter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Button onClick={applyFilters}>Apply Filters</Button>
        </MenuItem>
        <MenuItem value={"admin"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="admin"
                  onChange={handleCheckboxChange}
                  checked={selectedFilters.admin}
                />
              }
              label="Admin"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem value={"moderator"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="admin"
                  onChange={handleCheckboxChange}
                  defaultChecked={selectedFilters.moderator}
                />
              }
              label="Moderator"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem value={"client"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="client"
                  onChange={handleCheckboxChange}
                  defaultChecked={selectedFilters.client}
                />
              }
              label="Client"
            />
          </FormGroup>
        </MenuItem>
        <Divider />
        <MenuItem value={"Auxiliary"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="Auxiliary"
                  onChange={handleCheckboxChange}
                  defaultUnChecked
                />
              }
              label="Auxiliary"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem value={"Electronics"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="Electronics"
                  onChange={handleCheckboxChange}
                  defaultUnChecked
                />
              }
              label="Electronics"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem value={"Body_Repair"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="Body_Repair"
                  onChange={handleCheckboxChange}
                  defaultUnChecked
                />
              }
              label="Body Repair"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem value={"Heavy_Repair"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="Heavy_Repair"
                  onChange={handleCheckboxChange}
                  defaultUnChecked
                />
              }
              label="Heavy Repair"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem value={"Pneumatic"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="Pneumatic"
                  onChange={handleCheckboxChange}
                  defaultUnChecked
                />
              }
              label="Pneumatic"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem value={"Static"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="Static"
                  onChange={handleCheckboxChange}
                  defaultUnChecked
                />
              }
              label="Static"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem value={"Test_Room"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="Test_Room"
                  onChange={handleCheckboxChange}
                  defaultUnChecked
                />
              }
              label="Test Room"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem value={"Traction_Motor"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="Traction_Motor"
                  onChange={handleCheckboxChange}
                  defaultUnChecked
                />
              }
              label="Traction Motor"
            />
          </FormGroup>
        </MenuItem>
      </Menu>
    </div>
  );
}
