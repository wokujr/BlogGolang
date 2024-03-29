package models

import (
	"gorm.io/gorm"
	"time"
)

type Blog struct {
	Id        uint           `json:"id" gorm:"primaryKey"`
	Title     string         `json:"title"`
	Post      string         `json:"post"`
	Image     string         `json:"image"`
	CreateAt  time.Time      `json:"create_at"`
	UpdateAt  time.Time      `json:"update_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at" gorm:"index"`
	Category  []*Category    `gorm:"many2many:blog_categories;" json:"categories"`
}

type Category struct {
	Id           uint    `gorm:"primaryKey;" json:"id" `
	CategoryName string  `gorm:"unique" json:"category"`
	Blogs        []*Blog `gorm:"many2many:blog_categories;" json:"blogs"`
}
