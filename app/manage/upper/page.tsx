"use client";
import Navigation from "@/components/Navigation";
import PlusIcon from "@/components/icons/PlusIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
} from "@material-tailwind/react";

const Upper = () => {
  return (
    <main className="w-screen px-1 pt-1">
      <Card className="">
        <List>
          <ListItem ripple={false} className="py-1 pr-1 pl-4">
            Item One
            <ListItemSuffix>
              <IconButton variant="text" color="blue-gray">
                <TrashIcon />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
          <ListItem ripple={false} className="py-1 pr-1 pl-4">
            Item Two
            <ListItemSuffix>
              <IconButton variant="text" color="blue-gray">
                <TrashIcon />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
          <ListItem ripple={false} className="py-1 pr-1 pl-4">
            Item Three
            <ListItemSuffix>
              <IconButton variant="text" color="blue-gray">
                <TrashIcon />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
        </List>
      </Card>
      <div className="flex justify-center mt-5">
        <IconButton color="blue">
          <PlusIcon />
        </IconButton>
      </div>
      <Navigation />
    </main>
  );
};

export default Upper;
